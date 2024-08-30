import { useState } from "react";
import { GptMessage, MyMessage, TypingLoader, TextMessageBox } from "../component";

interface Message {
  text:string;
  isGpt:boolean;
}


export const chatTemplate = () => {
const [isloading, setIsLoading] = useState(false)
const [messages, setMessages] = useState<Message[]>([])

const handlePost = async(text:string) => { 
  setIsLoading(true);
  setMessages((prev)=> [...prev, {text:text, isGpt:false}])
//TODO Usecase
  setIsLoading(false)
// Todo: ñadir el mensaje de isGpt en true
}


  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Bienvenida */}
         
          <GptMessage text="Hola, soy WalterOrtagraphy. Puedes escribir tu texto aquí y te ayudaré con las correcciones." />
           
           {
         messages.map((message, index) => 
         message.isGpt 
         ? (<GptMessage key={index} text="esto es de Openai" />

         ): (<MyMessage key={index} text={ message.text }/>
         ))
         
}

{
  isloading && (
          <div className="col-start-1 col-end-12 fade-in">
          <TypingLoader />
          </div>

  )
}



        </div>
      </div>
      <TextMessageBox 
      onSendMessage={handlePost}
      placeholder="Escribe aqui lo que deseas"
      disableCorrections />
    </div>

  );
}

         
        






