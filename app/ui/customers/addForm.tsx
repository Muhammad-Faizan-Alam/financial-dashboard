'use client';
import Link from 'next/link';
import {
    UserCircleIcon,
    AtSymbolIcon,
    PhotoIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { addCustomer } from '@/app/lib/actions';
import { useState } from 'react';

export default function Form() {
    const [imageUrl, setImageUrl] = useState("");
    //   const initialState: State = { message: null, errors: {} };
    //   const [state, formAction] = useActionState(createInvoice, initialState);

    return (
        <form action={addCustomer}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="string"
                                placeholder="Enter name of Customer"
                                aria-describedby="name-error"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    {/* <div id="amount-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div> */}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type='email'
                                placeholder="Enter email of Customer"
                                aria-describedby="email-error"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    {/* <div id="amount-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div> */}
                </div>

                {/* Image */}
                <div className="mb-4">
                    <label htmlFor="image" className="mb-2 block text-sm font-medium">
                        Image
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="image_url"
                                name="image_url"
                                type="url"
                                placeholder="Enter image URL"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                aria-describedby="image-error"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    {imageUrl && (
                        <div className="mt-4">
                            <img src={imageUrl} alt="Preview" className="h-32 w-32 rounded-md object-cover border" />
                        </div>
                    )}
                </div>


            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/customers"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Add Customer</Button>
            </div>
        </form>
    );
}