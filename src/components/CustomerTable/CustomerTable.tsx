import {
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    StyledCustomerTable,
    StyledCustomerTableAddButton,
    StyledCustomerTableBody,
    StyledCustomerTableCell,
    StyledCustomerTableContainer,
    StyledCustomerTableHead,
    StyledCustomerTableHeader,
    StyledCustomerTableInput,
    StyledCustomerTablePaginationButton,
    StyledCustomerTablePaginationController,
    StyledCustomerTableRow,
    StyledCustomerTableToolbar,
} from './StyledCustomerTable';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export default function CustomerTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        state: {
            sorting,
            globalFilter,
        },
    });
    return (
        <div style={{ width: '100%' }}>
            <StyledCustomerTableToolbar>
                <StyledCustomerTableInput
                    placeholder='Filter table...'
                    value={globalFilter ?? ''}
                    onChange={(event) => {
                        table.setGlobalFilter(event.target.value);
                    }}
                />
                <NavLink to='/add'>
                    <StyledCustomerTableAddButton>
                        add customer
                    </StyledCustomerTableAddButton>
                </NavLink>
            </StyledCustomerTableToolbar>
            <StyledCustomerTableContainer>
                <StyledCustomerTable>
                    <StyledCustomerTableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <StyledCustomerTableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <StyledCustomerTableHead
                                            key={header.id}
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </StyledCustomerTableHead>
                                    );
                                })}
                            </StyledCustomerTableRow>
                        ))}
                    </StyledCustomerTableHeader>
                    <StyledCustomerTableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <StyledCustomerTableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && 'selected'
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <StyledCustomerTableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </StyledCustomerTableCell>
                                    ))}
                                </StyledCustomerTableRow>
                            ))
                        ) : (
                            <StyledCustomerTableRow>
                                <StyledCustomerTableCell
                                    colSpan={columns.length}
                                >
                                    No results.
                                </StyledCustomerTableCell>
                            </StyledCustomerTableRow>
                        )}
                    </StyledCustomerTableBody>
                </StyledCustomerTable>
            </StyledCustomerTableContainer>
            <StyledCustomerTablePaginationController>
                <StyledCustomerTablePaginationButton
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </StyledCustomerTablePaginationButton>
                <StyledCustomerTablePaginationButton
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </StyledCustomerTablePaginationButton>
            </StyledCustomerTablePaginationController>
        </div>
    );
}
