import { parse } from "../deps.ts";
import meta from "../meta.json" assert { type: "json" };

const ISNA_SOURCE =
  "https://www.iana.org/assignments/http-fields/field-names.csv";
const res = await fetch(ISNA_SOURCE);
const rawCsv = await res.text();
const csvMap = parse(rawCsv, {
  skipFirstRow: true,
});

const list = csvMap.map((fields) => fields["Field Name"] as string).map((
  value,
) => value.toLowerCase());

interface Fields {
  listable?: boolean;
  forbidden?: boolean;
}

const obj = list.reduce((acc, cur) => {
  acc[cur] = meta[cur as keyof typeof meta] ?? {};

  return acc;
}, {} as Record<string, Fields>);

Deno.writeTextFile("./db.json", JSON.stringify(obj, undefined, 2) + "\n");
