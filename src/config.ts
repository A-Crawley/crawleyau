let process: any;

const p = process?.env ? process.env : import.meta.env;

console.log(p)

export const AirtableConfig = {
    apikey: p.VITE_AIRTABLE_API,
    baseId: p.VITE_BASE_ID
}