"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import qs from "query-string";

export const SearchInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const categoryID = searchParams.get("categoryID");
    const name = searchParams.get("name");

    const [value, setValue] = useState<string>(name || "");

    // Delay the keyboard input by 500ms
    const debouncedValue = useDebounce<string>(value, 500);

    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        const query = {
            name: debouncedValue,
            categoryID,
        }

        // Remove empty strings, null values and add the query parameters to the url
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipEmptyString: true, skipNull: true });

        router.push(url);
    }, [debouncedValue, router, categoryID]);

    return (
        <div className="relative">
            <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
            <Input
                onChange={onChange}
                value={value}
                placeholder="Search..."
                className="pl-10 bg-primary/10"
            />
        </div>
    );
}