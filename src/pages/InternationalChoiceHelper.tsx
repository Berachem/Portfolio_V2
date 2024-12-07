import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import axios from "axios";
import Footer from "../components/Footer";
import MapInternationalHelper from "../components/international/MapInternationalHelper";

const ROWS_PER_PAGE = 10; // Nombre de lignes affichées par page

const InternationalChoiceHelper: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [formation, setFormation] = useState<string>("FI");
  const [category, setCategory] = useState<string>("");

  const [columns, setColumns] = useState<string[]>([]); // Colonnes dynamiques

  // Colonnes pour les filtres dynamiques
  const filterableColumns = ["ZONE", "PAYS", "VILLE"];

  // Chemin du fichier CSV local (dans le dossier public)
  const csvFilePath = "./Liste_Destinations_2025.csv"; // Placez votre fichier CSV dans public/assets/

  // Charger le fichier CSV localement avec Axios
  useEffect(() => {
    const fetchCsv = async () => {
      try {
        const response = await axios.get(csvFilePath, {
          responseType: "blob", // Spécifie que nous recevons un blob
        });
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          const csvText = e.target?.result as string;
          Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
              const jsonData = results.data;
              if (jsonData.length > 0) {
                setColumns(Object.keys(jsonData[0]  || {}));
                setData(jsonData);
                setFilteredData(jsonData);
              }
            },
          });
        };
        fileReader.readAsText(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement du fichier CSV :", error);
      }
    };

    fetchCsv();
  }, []);

  // Mettre à jour les filtres
  const handleFilterChange = (column: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: value,
    }));
    setCurrentPage(1); // Réinitialiser à la première page après un filtrage
  };

  // Appliquer les filtres et les filtres personnalisés Formation et Category
  useEffect(() => {
    const filtered = data.filter((row) => {
      // Vérifier les filtres dynamiques
      const matchesFilters = filterableColumns.every(
        (column) =>
          !filters[column] ||
          row[column]?.toString().toLowerCase().includes(filters[column].toLowerCase())
      );

      // Vérifier le filtre Formation
      const matchesFormation =
        !formation || (row[formation] && row[formation].toString().trim() !== "");

      // Vérifier le filtre Category
      const matchesCategory =
        !category || row["Category (indicative) C1/C2/C3"] === category;

      return matchesFilters && matchesFormation && matchesCategory;
    });

    setFilteredData(filtered);
  }, [filters, formation, category, data]);

  // Pagination : Obtenir les données pour la page actuelle
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredData.length / ROWS_PER_PAGE);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 dark:text-gray-200">
        International Choice Helper 🌍💫 
        {/* by Berachem */}
        <span className="text-sm block font-normal dark:text-gray-400">
            Aide à la recherche de destination internationale pour les étudiants de l'ESIEE Paris
        </span>
      </h1>

      {data.length === 0 ? (
        <p className="dark:text-gray-400">
          Chargement des données depuis {csvFilePath}...
        </p>
      ) : (
        <>
          {/* Filtres dynamiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {filterableColumns.map((column) => (
              <div key={column}>
                <label className="block font-bold mb-1 dark:text-gray-300">
                  {column}
                </label>
                <input
                  type="text"
                  placeholder={`Filtrer par ${column}`}
                  value={filters[column] || ""}
                  onChange={(e) => handleFilterChange(column, e.target.value)}
                  className="p-2 border rounded w-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                />
              </div>
            ))}

            {/* Filtre Formation */}
            <div>
              <label className="block font-bold mb-1 dark:text-gray-300">
                Formation
              </label>
              <select
                value={formation}
                onChange={(e) => setFormation(e.target.value)}
                className="p-2 border rounded w-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
              >
                <option value="">Toutes</option>
                {[
                  "AIC",
                  "BIO",
                  "CYB",
                  "DSIA",
                  "ENE",
                  "GI",
                  "INF",
                  "SE",
                  "SEI",
                  "FE",
                  "FG",
                  "FI",
                  "FR",
                  "FT",
                ].map((formationOption) => (
                  <option key={formationOption} value={formationOption}>
                    {formationOption}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtre Category */}
            <div>
              <label className="block font-bold mb-1 dark:text-gray-300">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-2 border rounded w-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
              >
                <option value="">Toutes</option>
                {["C1", "C2", "C3"].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sentence to resume what is he looking for */}
          {category && formation && (
            <div className="mb-6 dark:text-gray-300">
                You are looking for a <span className="font-bold">{category}</span> internship in <span className="font-bold">{formation}</span> formation.
            </div>
            )}

          {/* Tableau des données */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-900 border rounded shadow">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  {columns.map((column) => (
                    <th
                      key={column}
                      className="py-2 px-4 border dark:border-gray-700 dark:text-gray-300"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="even:bg-gray-100 odd:bg-gray-50 dark:even:bg-gray-800 dark:odd:bg-gray-700"
                    >
                      {columns.map((column) => (
                        <td
                          key={column}
                          className="py-2 px-4 border dark:border-gray-700 dark:text-gray-200"
                        >
                          <div
                            className="truncate"
                            title={row[column] || ""}
                          >
                            {row[column]?.toString().startsWith("http") ? (
                              <a
                                href={row[column]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                              >
                                {row[column]}
                              </a>
                            ) : (
                              row[column] || ""
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="text-center py-4 dark:text-gray-400"
                    >
                      Aucun résultat trouvé.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-4 space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
              >
                Précédent
              </button>
              <span className="dark:text-gray-300">
                Page {currentPage} sur {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="p-2 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
              >
                Suivant
              </button>
            </div>
          )}
        </>
      )}
      

      <MapInternationalHelper data={filteredData} />

       {/* Footer */}
       <Footer />
    </div>
    
  );
};

export default InternationalChoiceHelper;
