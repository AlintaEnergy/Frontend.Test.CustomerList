import { ColumnDef } from '@tanstack/react-table';
import { ICustomer } from '../../types/types';
import { StyledCustomerTableDelete } from './StyledCustomerTable';

export const Columns = (
    deleteCustomer: (customer: ICustomer) => void
): ColumnDef<ICustomer>[] => {
    return [
        {
            accessorKey: 'firstName',
            header: ({ column }) => {
                return (
                    <button
                        style={{
                            cursor: 'pointer',
                            background: 'none',
                            border: 'none',
                        }}
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === 'asc')
                        }
                    >
                        First Name
                        <svg
                            style={{ marginLeft: '0.5rem' }}
                            xmlns='http://www.w3.org/2000/svg'
                            width='12'
                            height='12'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='lucide lucide-arrow-down-up'
                        >
                            <path d='m3 16 4 4 4-4' />
                            <path d='M7 20V4' />
                            <path d='m21 8-4-4-4 4' />
                            <path d='M17 4v16' />
                        </svg>
                    </button>
                );
            },
        },
        {
            accessorKey: 'lastName',
            header: 'Last Name',
        },
        {
            accessorKey: 'phoneNumber',
            header: 'Phone Number',
        },
        {
            id: 'actions',
            cell: ({ row }) => {
                const customer = row.original;

                return (
                    <StyledCustomerTableDelete
                        onClick={() => deleteCustomer(customer)}
                    >
                        Delete
                    </StyledCustomerTableDelete>
                );
            },
        },
    ];
};
