import * as tty from '@inquirer/prompts'
import { zemmet } from 'zemmet'
import colors from 'yoctocolors';
import yoctoSpinner from 'yocto-spinner'

export async function spinner(loading_text="", cb, err_cb){
  let cur_spinner = yoctoSpinner({ text: loading_text, color: 'cyan' }).start()
  try {
    let res = await cb({
      success: x => cur_spinner.success(x),
      error: x => cur_spinner.error(x),
      warning: x => cur_spinner.warning(x)
    })
    if(cur_spinner.isSpinning){
      cur_spinner.success(loading_text)
    }
    return res
  } catch(e){
    if(err_cb){
      err_cb(e)
    } else {
      cur_spinner.error(loading_text)
      throw e
    }
  }
}


// TODO: make a file per prompt type, use this as a barrel

export async function runAction(gen, params){
  // TODO: pass all possible prompts as second argument
  let iter = gen(params, prompts)
  let cur = await iter.next()
  while(cur && !cur.done){
    cur = await iter.next(cur.value)
  }
  if(cur.done && cur.value){
    await Promise.all(
      Object.entries(cur.value).map(async ([k,v]) => {
        await Bun.write(k,v)
      })
    )
  }
}



export function emmetHTML(opts){
  return async () => {
    let ans = await tty.input({
      message: 'emmet string html starter',
      ...opts,
      transformer(str, { isFinal }){
        let preview = ''
        let hasError
        try{
          preview = zemmet.html(str)
        } catch(e){
          hasError = true
        }
        if(hasError){
          return colors.red( '\n\n' + str)
        }
        return '\n' + preview + '\n' + str
      }
    })
    return zemmet.html(ans)
  }
}


export function emmetCSS(opts){
  return async () => {
    let ans = await tty.input({
      message: 'emmet string css starter',
      ...opts,
      transformer(str, { isFinal }){
        let preview = ''
        let hasError
        try{
          preview = zemmet.css(str)
        } catch(e){
          hasError = true
        }
        if(hasError){
          return colors.red( '\n\n' + str)
        }
        return '\n' + preview + '\n' + str
      }
    })
    return zemmet.css(ans)
  }
}

export async function askGaps(provided,defs){
  let ans = Object.assign({}, provided)
  for (let k of Object.keys(defs)){
    if(!ans[k]){
      ans[k] = await defs[k]()
    }
  }
  
  return ans
}