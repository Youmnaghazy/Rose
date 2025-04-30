import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserIcon } from "lucide-react";

const invoices = [
  {
    photo: "/icons/avatar.png",
    fullName: "John Doe",
    email: "john.doe@example.com",
    model: "X7B9P2M1",
    status: "active",
    phoneNumber: "1234567890",
  },
  {
    photo: undefined,
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    model: "Y3K8N4L2",
    status: "pending",
    phoneNumber: "1234567890",
  },
  {
    photo: undefined,
    fullName: "Robert Johnson",
    email: "robert.j@example.com",
    model: "Z5M7Q9R3",
    status: "processing",
    phoneNumber: "1234567890",
  },
  {
    photo: undefined,
    fullName: "Emily Davis",
    email: "emily.d@example.com",
    model: "A2C4E6G8",
    status: "active",
    phoneNumber: "1234567890",
  },
  {
    photo: undefined,
    fullName: "Michael Brown",
    email: "michael.b@example.com",
    model: "B3D5F7H9",
    status: "active",
    phoneNumber: "1234567890",
  },
  {
    photo: undefined,
    fullName: "Sarah Wilson",
    email: "sarah.w@example.com",
    model: "C4E6G8I0",
    status: "pending",
    phoneNumber: "1234567890",
  },
  {
    photo: undefined,
    fullName: "David Miller",
    email: "david.m@example.com",
    model: "D5F7H9J1",
    status: "processing",
    phoneNumber: "1234567890",
  },
];

export function InvoiceTable() {
  return (
    <div className="p-4 rounded-xl shadow-table">
      <Table>
        <TableHeader>
          <TableRow className="text-rose-100 font-medium">
            <TableHead className="text-rose-100 text-center">Photo</TableHead>
            <TableHead className="text-rose-100 text-center">
              Full Name
            </TableHead>
            <TableHead className="text-rose-100 text-center">Email</TableHead>
            <TableHead className="text-rose-100 text-center">
              Phone Number
            </TableHead>
            <TableHead className="text-rose-100 text-center">Model</TableHead>
            <TableHead className="text-rose-100 text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow
              key={invoice.model}
              className="text-[#666666] text-xs font-medium"
            >
              <TableCell className="text-center">
                <div className="w-6 mx-auto aspect-square rounded-full overflow-clip bg-gray-200 grid place-content-center relative">
                  {invoice.photo ? (
                    <img
                      src={invoice.photo}
                      alt=""
                      className="w-full h-full object-cover rounded-full object-center"
                    />
                  ) : (
                    <UserIcon className="w-4 h-4" />
                  )}
                </div>
              </TableCell>
              <TableCell className="text-center">{invoice.fullName}</TableCell>
              <TableCell className="text-center">{invoice.email}</TableCell>
              <TableCell className="text-center">
                {invoice.phoneNumber}
              </TableCell>
              <TableCell className="text-center">{invoice.model}</TableCell>
              <TableCell className="text-center">
                <Status
                  status={invoice.status as "active" | "pending" | "processing"}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* </div> */}
    </div>
  );
}

const Status = ({
  status,
}: {
  status: "active" | "pending" | "processing";
}) => {
  const statusColor = {
    active: "#33B715",
    pending: "#FF4E28",
    processing: "#248DDB",
  };
  const statusIcon = {
    active: "/icons/active.svg",
    pending: "/icons/pending.svg",
    processing: "/icons/process.svg",
  };
  return (
    <div
      className="flex items-center gap-1 text-xs justify-center"
      style={{ color: statusColor[status as keyof typeof statusColor] }}
    >
      <img src={statusIcon[status as keyof typeof statusIcon]} alt={status} />
      {status}
    </div>
  );
};
