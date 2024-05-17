import { Serie } from "./serie.js";
//import { data } from "./data.js";

export const columns: ComlumDef<Serie>[] = [
    {
        accessorKey:'id',
        header:'Id',
    },
    {
        accessorKey:'name',
        header:'Name',
    },
    {
        accessorKey:'channel',
        header:'Channel',
    },
    {
        accessorKey:'seasons',
        header:'Season',
    }
]

