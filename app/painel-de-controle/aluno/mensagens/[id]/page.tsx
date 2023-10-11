"use client";

import Image from "next/image";
import { Dot, Search, ImageIcon, Mic } from "lucide-react";

import Button from "@/components/Button";

const DashboardPage = () => {
  return (
    <div className="flex-1 w-full mx-auto flex flex-col  lg:flex-row ">
      <div className="flex-1 w-full flex flex-col bg-white lg:w-5/12 pt-9">
        <div className="w-full px-6">
          <div className="pt-2 relative mx-auto">
            <input
              type="search"
              name="search"
              placeholder="Pesquise o aluno aqui..."
              className="w-full border-2 border-gray-200 bg-gray-200 h-10 px-5 pr-16 rounded-lg text-md focus:outline-none"
            />
            <button type="submit" className="absolute right-0 top-0 mt-4 mr-4">
              <Search
                style={{
                  color: "#9DA5AA",
                }}
              />
            </button>
          </div>
        </div>
        <div className="w-full h-56 scrollbar scrollbar-thumb-slate-100 mt-9">
          <div className="w-full bg-white hover:bg-green-primary transition ease-in-out delay-150 py-6 group">
            <div className="flex flex-row w-full">
              <div className="flex justify-start px-6 w-3/12 md:w-2/12 lg:w-4/12 xl:w-3/12 2xl:w-2/12">
                <Image
                  src="/assets/images/profile-test.png"
                  alt="Perfil"
                  width={50}
                  height={50}
                  className="object-cover rounded-3xl lg:w-12 lg:h-12"
                />
              </div>

              <div className="flex flex-col w-5/12 md:w-6/12 lg:w-4/12 group-hover:text-white transition ease-in-out delay-150">
                <span className="font-semibold">John Doe</span>
                <span className="text-sm whitespace-nowrap">
                  Gostei das aulas, muito...
                </span>
              </div>

              <div className="flex justify-end w-4/12 px-6 overflow-hidden bg-white group-hover:bg-green-primary  transition ease-in-out delay-150 lg:w-4/12 2xl:w-6/12">
                <span className="rounded-3xl w-12 h-12 bg-green-primary text-white flex justify-center items-center font-semibold group-hover:text-green-primary group-hover:bg-white  transition ease-in-out delay-150">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-6 pb-6 mt-auto">
          <Button label="Suporte" fullWidth primary />
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-col lg:w-8/12">
        <div className="w-full bg-[#2C383F] h-fit px-6 py-2">
          <div className="flex flex-row w-full">
            <div className="flex justify-start w-1/12 py-2">
              <Image
                src="/assets/images/profile-test.png"
                alt="Perfil"
                width={50}
                height={50}
                className="object-cover rounded-3xl lg:w-12 lg:h-12"
              />
            </div>
            <div className="flex flex-col text-white py-2  w-7/12">
              <span className="text-md font-medium"> John Doe</span>
              <span className="text-xs">Online</span>
            </div>
            <div className="flex justify-end w-4/12 px-4 py-2">
              <Button label="Confirmar Finalização" fullWidth primary />
            </div>
          </div>
        </div>
        <div className="w-full flex bg-[#2C383F] h-28 mt-auto">
          <div className="w-full flex flex-row px-4 py-4 gap-8">
            <div className="flex flex-row items-center justify-start gap-3.5 pl-11">
              <button className="rounded-xl w-12 h-12 bg-green-primary text-white flex justify-center items-center">
                <ImageIcon />
              </button>

              <button className="rounded-xl w-12 h-12 bg-green-primary text-white flex justify-center items-center">
                <ImageIcon />
              </button>
            </div>

            <div className="w-full flex items-center">
              <input
                type="search"
                name="search"
                placeholder="Digite a sua mensagem"
                className="w-full border-2 border-[#40535D] bg-[#40535D] h-12 pl-5 pr-5 rounded-xl text-md text-white focus:outline-none"
              />
            </div>

            <div className="flex flex-row items-center justify-start pr-11">
              <button className="rounded-xl w-full h-12 px-2.5 gap-2.5  bg-green-primary text-white flex justify-center items-center font-semibold">
                <Mic />
                Gravar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
