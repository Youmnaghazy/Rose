"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQueryState, parseAsInteger } from "nuqs";
import { FC, useEffect, useState } from "react";

type PaginationComponentProps = {
  totalPages: number;
  onPageChange?: (page: number) => void;
};

export const usePagination = () => {
  const controls = useQueryState("page", parseAsInteger.withDefault(1));
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("page", controls[0].toString());
    router.push(`?${searchParams.toString()}`);
  }, [controls[0]]);

  return controls;
};

export const PaginationComponent: FC<PaginationComponentProps> = ({
  totalPages,
  onPageChange,
}) => {
  const [page, setPage] = usePagination();

  const [renderedPages, setRenderedPages] = useState<number[]>([1, 2, 3]);

  const canGoNext = renderedPages[renderedPages.length - 1] !== totalPages - 1;
  const canGoPrev = renderedPages[0] !== 1;

  const goNext = () => {
    setRenderedPages((prev) => [prev[2] + 1, prev[2] + 2, prev[2] + 3]);
  };

  const goPrev = () => {
    setRenderedPages((prev) => [prev[0] - 3, prev[0] - 2, prev[0] - 1]);
  };

  useEffect(() => {
    onPageChange?.(page);
  }, [page]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => {
              if (canGoPrev) {
                goPrev();
                setPage((prev) => prev - 1);
              }
            }}
          >
            <ChevronLeftIcon />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => {
              setPage(renderedPages[0]);
            }}
            isActive={page === renderedPages[0]}
          >
            {renderedPages[0]}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => {
              setPage(renderedPages[1]);
            }}
            isActive={page === renderedPages[1]}
          >
            {renderedPages[1]}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => {
              setPage(renderedPages[2]);
            }}
            isActive={page === renderedPages[2]}
          >
            {renderedPages[2]}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => {
              setPage(totalPages);
            }}
            isActive={page === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => {
              if (canGoNext) {
                goNext();
                setPage((prev) => prev + 1);
              }
            }}
          >
            <ChevronRightIcon />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
