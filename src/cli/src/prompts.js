import prompts from 'prompts'
import ora from 'ora'
import ansiEscapes from 'ansi-escapes'

async function clearLine(){
  await Bun.write(Bun.stdout,ansiEscapes.eraseLines(2))
}

export async function Text({ 
  message="Component name",
  validate=()=>true
}={}){
  let res = await prompts({
    type: 'text',
    name: 'value',
    message: message,
    validate: validate
  })
  await clearLine()
  return res.value
}

export async function List({ 
  message="List classes (space separated)",
  validate=()=>true,
  result_map=(x)=>x,
  separator= ','
}={}){
  let res = await prompts({
    type: 'list',
    name: 'value',
    message: message,
    separator: separator,
  })

  
  await clearLine()
  return res.value
}

export async function Select({
  message="Select option",
  validate=()=>true,
  choices=[
    {title: 'Red', description: 'Description', value: '#ff0000'},
    {title: 'Blue', description: 'This is disabled', value: '#0000ff', disabled: true},
  ],
  multi=false,
  max=2,
  initial= 1,
  hint= '- Space to select. Return to submit'
}={}){
  let res = await prompts({
    type: multi ? 'multiselect' : 'select',
    message,
    choices,
    name: 'value',
    hint,
    initial: initial,
    max: multi ? max : void 0
  })
  await clearLine()
  return res.value
}

export async function Loader(promise=new Promise(),{
  message='Loading test',
  persist=false
}={}){
  const spinner = ora(message).start()
  let res
  try {
    res = await Promise.resolve(promise)
    if(persist){
      spinner.succeed()
    } else {
      spinner.stop()
    }
  } catch(e){
    spinner.fail()
  } finally {
    return res
  }
}