import { Table } from "@radix-ui/themes";
import React, { useState } from "react";
import "@radix-ui/themes/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { tableItemPayload } from "./types/tableInterface";
import { useNavigate } from "react-router-dom";
import "./UserTable.css"; 
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
const UserTable: React.FC = () => {
  const navigate = useNavigate();
  const handleUserId = (id: number) => {
    navigate(`/${id}`);
  };
  const { users, loading } = useSelector((state: RootState) => state.user);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; 
  const totalPages = Math.ceil(users.length / pageSize);

  const paginatedUsers = users.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="user-table-container">
      {loading ? (
        <h3 className="loading-text">Loading UserList...</h3>
      ) : (
        <>
          <Table.Root className="custom-table" variant="surface">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Username</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Full Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Phone</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {paginatedUsers.map((item: tableItemPayload, index: number) => (
                <Table.Row
                  key={index}
                  onClick={() => handleUserId(item.id)}
                  className="table-row"
                >
                  <Table.RowHeaderCell>{item.username}</Table.RowHeaderCell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.email}</Table.Cell>
                  <Table.Cell>{item.phone}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>

         
          <div className="pagination-container">
            <button
              className={`pagination-button ${
                currentPage === 1 ? "disabled" : ""
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <IoMdArrowBack/>
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`pagination-button ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className={`pagination-button ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <IoMdArrowForward/>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserTable;
