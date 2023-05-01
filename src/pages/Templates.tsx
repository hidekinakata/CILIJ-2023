import React from "react";
import { Link } from "react-router-dom";

type TemplatesType = {};

const Templates: React.FC<TemplatesType> = (props) => {
  const data = [
    {
      type: "Template Artigo",
      path: "templates/template_artigo_congresso_2023.doc",
    },
    {
      type: "Template Resumo",
      path: "templates/template_resumo_congresso_2023.doc",
    },
    {
      type: "Template Poster",
      path: "templates/template_poster_congresso_2023.pptx",
    },
    {
      type: "Template Slides",
      path: "templates/template_slide_congresso_2023.pptx",
    },
  ];

  return (
    <main
      className={
        "relative flex min-h-screen flex-col items-center gap-10 px-4 pb-10 pt-32 sm:px-32 md:pt-44"
      }
    >
      <h1
        className={"my-8 text-center text-2xl font-black md:mb-12 md:text-5xl"}
      >
        Templates
      </h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="0 w-full text-left text-sm text-gray-500">
          <thead className="bg-aubergine-700 text-xs uppercase text-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Template
              </th>
              <th scope="col" className="px-6 py-3">
                Formato
              </th>
              <th scope="col" className="px-6 py-3">
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((template) => (
              <tr key={template.type} className="border-b bg-white ">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  {template.type}
                </th>
                <td className="px-6 py-4">*.{template.path.split(".")[1]}</td>
                <td className="px-6 py-4">
                  <a
                    href={template.path}
                    className="font-medium text-blue-600 hover:underline "
                    download={true}
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Templates;
