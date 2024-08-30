import { OrthographyResponse } from "../../interface";

export const ortographyUseCase = async  (prompt:string) =>{  


    try {

  const resp = await fetch(`${import.meta.env.VITE_GPT_API}/orthography-check`,{
    method: 'POST',
    headers:{
       'Content-Type': 'application/json'
    },
    body: JSON.stringify({prompt:prompt})
  });

  if ( !resp.ok ) throw new Error('No se pudo completar la operacion');

  const data = await  resp.json() as OrthographyResponse;


  return { 
    ok: true,  
    ...data,

}



        
    } catch (error) {
        return { 
            ok: false,  
            userScore:0,
            erros: [],
            message: "no se pudo realizar la correccion."

        }
        
    }

}