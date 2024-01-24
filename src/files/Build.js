import { Model } from 'zilk'
import { Glob } from 'bun'
import { File } from './File.js'
import path from 'path'

export let Build = Model({
  filter: '',
  input_dir: '.',
  get glob(){
    let { input_dir, filter } = this
    return `${input_dir}/${filter}`
  },
  get globber(){
    let { glob } = this
    return new Glob(glob)
  },
  _files: {},
  get all_files(){
    let { _files } = this
    return Object.values(_files)
  },
  FileModelCallback(){
    return File
  },
  async create_file(route){
    if(!this._files[route]){
      let FileModel = this.FileModelCallback()
      let name = route.replace(this.input_dir+'/','')
      name = name.substring(0,name.lastIndexOf('.'))
      let forb = FileModel({ 
        route: path.join(process.cwd(),route),
        name
      })
      await forb.update()
      this._files[route] = forb
      this._files = this._files
    } else {
      console.log('file already exists!')
    }
  },
  async init(){
    await this.update({ skip_delete: true })
  },
  async update({ skip_delete = false}={}){
    let { _files, globber } = this
    let path_arr = [...globber.scanSync('.')]
    if(!skip_delete){
      Object.keys(_files).forEach(prev_path => {
        if(path_arr.indexOf(prev_path) == -1){
          console.log('DELETE ' + prev_path)
          delete _files[prev_path]
        }
      })
    }
    for(let i = 0; i < path_arr.length; i++){
      let cur_path = path_arr[i]
      if(_files[cur_path]){
        await _files[cur_path].update()
      } else {
        await this.create_file(cur_path)
      }
    }
  }
})