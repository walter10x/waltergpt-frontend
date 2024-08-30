import { FormEvent, useRef, useState } from "react";

interface Props { 
    onSendMessage: (message: string) => void;
    placeholder?: string;
    disableCorrections?: boolean;
    accept?: string;
}

export const TextMessageBoxFile = ({ onSendMessage, placeholder, disableCorrections = false, accept }: Props) => {
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // Corregido: inicialización de selectedFile
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim().length === 0) return;
    onSendMessage(message);
    setMessage('');
    setSelectedFile(null); // Limpiar el archivo seleccionado después de enviar el mensaje

    console.log("Message sent");
  }

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
    >
      <div className="mr-3">
        <button
          type="button"
          className="flex items-center justify-center text-gray-400 hover:text-gray-600"
          onClick={() => inputFileRef.current?.click()}
        >
          <i className="fa-solid fa-paperclip text-xl"></i>
        </button>

        <input
          type="file"
          ref={inputFileRef}
          accept={accept}
          className="hidden" // Para ocultar el input de archivo real
          onChange={(e) => setSelectedFile(e.target.files?.item(0) || null)} // Corregido: manejo de cambio de archivo
        />
      </div>

      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            autoFocus
            name="message"
            className="flex w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            placeholder={placeholder}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className="ml-4">
        <button className="btn-primary"
        disabled={!selectedFile}
        >

          { !selectedFile ? (
            <span className="mr-2">Enviar</span>
          ) : (
            <span className="mr-2">{selectedFile.name.substring(0, 10) + '...'}</span>
          )}
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
}
