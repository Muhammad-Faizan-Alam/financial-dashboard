import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Customers',
};

import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { AddCustomer } from '@/app/ui/customers/buttons';
import { lusitana } from '@/app/ui/fonts';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';


export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        // page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    // const currentPage = Number(searchParams?.page) || 1;
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search customers..." />
                <AddCustomer />
            </div>
            <Suspense key={query} fallback={<CustomersTableSkeleton />}>
                <Table query={query} />
            </Suspense>
            {/* <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div> */}
        </div>
    );
}