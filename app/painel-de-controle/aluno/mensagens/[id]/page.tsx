"use client";

import Image from "next/image";
import { Dot, Search } from "lucide-react";

import Button from "@/components/Button";

const DashboardPage = () => {
  return (
    <div className="flex-1 w-full pt-9 mx-auto flex flex-col gap-9 md:flex-row md:px-16 lg:container">
      <div className="w-full px-6">
        <div className="pt-2 relative mx-auto ">
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
      <div className="w-full h-56 scrollbar scrollbar-thumb-slate-100">
        <div className="w-full bg-white hover:bg-green-primary transition ease-in-out delay-150 py-6 group">
          <div className="flex flex-row w-full">
            <div className="flex justify-start px-6 w-3/12">
              <Image
                src="/assets/images/profile-test.png"
                alt="Perfil"
                width={50}
                height={50}
                className="object-cover rounded-3xl lg:w-12 lg:h-12"
              />
            </div>

            <div className="flex flex-col w-5/12">
              <span className="font-semibold">John Doe</span>
              <span className="text-sm whitespace-nowrap">
                Gostei das aulas, muito...
              </span>
            </div>

            <div className="flex justify-end w-4/12 px-6 overflow-hidden bg-white group-hover:bg-green-primary  transition ease-in-out delay-150">
              <span className="rounded-3xl w-12 h-12 bg-green-primary text-white flex justify-center items-center font-semibold group-hover:text-green-primary group-hover:bg-white  transition ease-in-out delay-150">
                1
              </span>
            </div>
          </div>
        </div>

        <div className="w-full bg-white hover:bg-green-primary transition ease-in-out delay-150 py-6 group">
          <div className="flex flex-row w-full">
            <div className="flex justify-start px-6 w-3/12">
              <Image
                src="/assets/images/profile-test.png"
                alt="Perfil"
                width={50}
                height={50}
                className="object-cover rounded-3xl lg:w-12 lg:h-12"
              />
            </div>

            <div className="flex flex-col w-5/12">
              <span className="font-semibold">Mary Doe</span>
              <span className="text-sm whitespace-nowrap">
                Gostei das aulas, muito...
              </span>
            </div>

            <div className="flex justify-end w-4/12 px-6 overflow-hidden bg-white group-hover:bg-green-primary  transition ease-in-out delay-150">
              <span className="rounded-3xl w-12 h-12 bg-green-primary text-white flex justify-center items-center font-semibold group-hover:text-green-primary group-hover:bg-white  transition ease-in-out delay-150">
                3
              </span>
            </div>
          </div>
        </div>

        <div className="w-full bg-white hover:bg-green-primary transition ease-in-out delay-150 py-6 group">
          <div className="flex flex-row w-full">
            <div className="flex justify-start px-6 w-3/12">
              <Image
                src="/assets/images/profile-test.png"
                alt="Perfil"
                width={50}
                height={50}
                className="object-cover rounded-3xl lg:w-12 lg:h-12"
              />
            </div>

            <div className="flex flex-col w-5/12">
              <span className="font-semibold">Mary Doe</span>
              <span className="text-sm whitespace-nowrap">
                Gostei das aulas, muito...
              </span>
            </div>

            <div className="flex justify-end w-4/12 px-6 overflow-hidden bg-white group-hover:bg-green-primary  transition ease-in-out delay-150">
              <span className="rounded-3xl w-12 h-12 bg-green-primary text-white flex justify-center items-center font-semibold group-hover:text-green-primary group-hover:bg-white  transition ease-in-out delay-150">
                5
              </span>
            </div>
          </div>
        </div>

        <div className="w-full bg-white hover:bg-green-primary transition ease-in-out delay-150 py-6 group">
          <div className="flex flex-row w-full">
            <div className="flex justify-start px-6 w-3/12">
              <Image
                src="/assets/images/profile-test.png"
                alt="Perfil"
                width={50}
                height={50}
                className="object-cover rounded-3xl lg:w-12 lg:h-12"
              />
            </div>

            <div className="flex flex-col w-5/12">
              <span className="font-semibold">Mary Doe</span>
              <span className="text-sm whitespace-nowrap">
                Gostei das aulas, muito...
              </span>
            </div>

            <div className="flex justify-end w-4/12 px-6 overflow-hidden bg-white group-hover:bg-green-primary  transition ease-in-out delay-150">
              <span className="rounded-3xl w-12 h-12 bg-green-primary text-white flex justify-center items-center font-semibold group-hover:text-green-primary group-hover:bg-white  transition ease-in-out delay-150">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;