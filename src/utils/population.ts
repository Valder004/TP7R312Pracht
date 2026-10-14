export type PopulationRow = {
  "Géographie": string;
  "Niveau Géo": string;
  Sexe: string;
  "Âge": string;
  Période: number;
  Valeur: number;
  "Mesure du recensement ": string;
};

export function getDepartmentPopulation(
  rows: readonly PopulationRow[],
  period: number,
  sex: string,
  age: string,
) {
  return new Map(
    rows
      .filter(
        (row) =>
          row.Période === period &&
          row.Sexe === sex &&
          row["Âge"] === age &&
          row["Niveau Géo"] === "Département" &&
          row["Mesure du recensement "] === "Population",
      )
      .map((row) => [row["Géographie"], row.Valeur] as const),
  );
}
