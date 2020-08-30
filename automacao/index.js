const fs = require('fs').promises; 
const regAssetsRegex = /\.\.*\/assets/gi
const regSanboxRegex = /\/sandboxfront.*\/img/gi

const regSanboxRegexString = '/sandboxfront/arqlef/img'

const pushAr = []
async function listarArquivosDoDiretorio(diretorio,arquivos){
    if(!arquivos){
        arquivos = []
    }    
    let listaDeArquivos = await fs.readdir(diretorio)
    for(let k in listaDeArquivos){
        let stat = await fs.stat(diretorio+'/'+listaDeArquivos[k])
        if(stat.isDirectory()){
            await listarArquivosDoDiretorio(diretorio+'/'+listaDeArquivos[k],arquivos)
        }else{           
            let regexVue = RegExp(/\.Vue/gi)
            if(regexVue.test(diretorio+'/'+listaDeArquivos[k])){                
                pushAr.push(diretorio+'/'+listaDeArquivos[k])              
            }
        }
    }
}
async function executarFunc(){
    await  listarArquivosDoDiretorio('D:\\Lefisc\\Arquivei2\\src',pushAr)
    let i  = 0
    for(let p of pushAr){      
        i++          
        let e  = await fs.readFile(p,'utf-8',(err,data)=>{
          return data
        })       
        e = e.replace(regAssetsRegex,regSanboxRegexString)            
        await fs.writeFile(p, e,(e)=>{
           console.log('savebd')
        })
    }
}

executarFunc()

