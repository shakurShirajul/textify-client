
import { useQuery } from '@tanstack/react-query';
import { createColumnHelper, flexRender, useReactTable, getCoreRowModel, getSortedRowModel } from '@tanstack/react-table';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';

const FeaturedTable = () => {

    const columnHelper = createColumnHelper();

    const [tableData, setTableData] = useState([])
    const { data: tableDatas, isPending } = useQuery({
        queryKey: ["tableData"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/blogs/featured`,{
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setTableData(res.data);
            return res.data;
        },
    });

    const columns = [
        columnHelper.accessor("_id", {
            cell: (info) => <span className='font-semibold'>{info.row.index + 1}</span>,
            header: "SN",
        }),
        columnHelper.accessor("title", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Blog",
        }),
        columnHelper.accessor("author_name", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Blog Owner",
        }),
        columnHelper.accessor("author_image", {
            cell: (info) => (
                <img
                    src={info?.getValue()}
                    alt="..."
                    className="rounded-full w-10 h-10 object-cover"
                />
            ),
            header: "Blog Owner Picture",
        }),
    ];

    const [sorting, setSorting] = useState([]);

    const table = useReactTable({
        data: tableData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting: sorting,
        },
        onSortingChange: setSorting,
    })
    return (

        <div className="p-2 max-w-5xl mx-auto rounded-xl w-full fill-gray-400 font-inter">
            <table className="rounded-xl w-full text-left">
                <thead className="bg-white font-grotsk">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    onClick={header.column.getToggleSortingHandler()}
                                    key={header.id} className="capitalize px-3.5 py-2">
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                    {
                                        { asc: '🔼', desc: '🔽' }[header.column.getIsSorted() ?? null
                                        ]
                                    }
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row, i) => (
                            <tr
                                key={row.id}
                                className={`
                ${i % 2 === 0 ? "bg-[#e7e9eb]" : "bg-white"}
                `}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-3.5 py-2">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr className="text-center h-32">
                            <td colSpan={12}>No Recoard Found!</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FeaturedTable;
