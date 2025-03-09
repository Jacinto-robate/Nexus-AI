"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "@/components/core/file-upload";

import { Paperclip } from "lucide-react";
import { Sparkles } from "@/components/sparkles";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const FileSvgDraw = () => {
  return (
    <>
      <svg
        className="w-8 h-8 mb-3 text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-1 text-sm text-white">
        <span className="font-semibold">Clique para enviar</span>
        &nbsp; ou arraste e solte
      </p>
      <p className="text-xs text-white">Arquivos PDF ou DOCX</p>
    </>
  );
};

const DocumentUploader = () => {
  const [files, setFiles] = useState<File[] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };

  const handleFileChange = (newFiles: File[] | null) => {
    setFiles(newFiles);

    if (newFiles && newFiles.length > 0) {
      toast({
        title: "Arquivos adicionados",
        description: `${newFiles.length} ${
          newFiles.length === 1 ? "arquivo foi" : "arquivos foram"
        } carregados com sucesso.`,
        duration: 3000,
        className: "bg-white text-black border-gray-200",
      });
    }
  };

  const handleSubmit = async () => {
    if (!files || files.length === 0) {
      toast({
        title: "Erro",
        description: "Por favor, selecione pelo menos um arquivo para enviar.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Add your file submission logic here
      // Example:
      // const formData = new FormData();
      // files.forEach(file => formData.append('files', file));
      // await fetch('/api/upload', { method: 'POST', body: formData });

      toast({
        title: "Sucesso",
        description: "Arquivos enviados com sucesso!",
        duration: 3000,
        className: "bg-white text-black border-gray-200",
      });

      // Navigate to the new page after successful upload
      router.push("/chat"); // Replace '/chat' with your desired destination path
    } catch {
      // Using empty catch block to avoid unused variable warnings
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar os arquivos.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="h-screen w-full overflow-hidden bg-black text-white">
        <section className="container mx-auto relative h-[90vh] mt-4 border border-white/10 w-full overflow-hidden rounded-2xl">
          <article className="grid gap-4 text-center relative z-10 pt-10">
            <span className="inline-block xl:text-base text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
              Nexus JR AI
            </span>
            <h1 className="2xl:text-6xl xl:text-5xl text-5xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter mt-6">
              Envie seus documentos e faça perguntas com IA
            </h1>
            <span>
              Faça upload de arquivos PDF ou DOCX e obtenha respostas baseadas
              no conteúdo. Uma forma fácil e inteligente de extrair informações!
            </span>

            <div className="w-fit mx-auto space-y-4">
              <FileUploader
                value={files}
                onValueChange={handleFileChange}
                dropzoneOptions={dropZoneConfig}
                className="relative rounded-lg p-2 w-96 mx-auto"
              >
                <FileInput className="outline-dashed outline-2 bg-transparent outline-white/40">
                  <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full">
                    <FileSvgDraw />
                  </div>
                </FileInput>
                <FileUploaderContent>
                  {files &&
                    files.length > 0 &&
                    files.map((file, i) => (
                      <FileUploaderItem
                        key={i}
                        index={i}
                        className="bg-transparent text-white"
                      >
                        <Paperclip className="h-4 w-4 flex-shrink-0 stroke-current" />
                        <p className="text-ellipsis inline-block overflow-hidden text-xs w-full">
                          {file.name}
                        </p>
                      </FileUploaderItem>
                    ))}
                </FileUploaderContent>
              </FileUploader>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#c0c7ff] to-[#4c64ff] font-medium text-neutral-200 border-2 border-[#656fe2] transition-all duration-300 hover:w-32 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </div>
                <div className="absolute right-3.5">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </article>

          <div className="absolute bottom-0 z-[2] h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute">
            <Sparkles
              density={1800}
              speed={1.2}
              color="#48b6ff"
              className="absolute inset-x-0 bottom-0 h-full w-full"
            />
          </div>
        </section>
      </main>
      <Toaster />
    </>
  );
};

export default DocumentUploader;
