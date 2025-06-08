export interface Country {
  code: string;
  name: string;
  emoji?: string;
  flagUrl: string;
}

export interface CountriesData {
  countries: Country[];
}
