import React, { useState } from "react"
import { Table, Select, Pagination } from "antd"
import { EmployeeFormValues } from "@/_interfaces/employee"
import { columns } from "@/data/columnsTable"
import { SearchInput } from "./SearchInput"

const { Option } = Select

export const TableComponent: React.FC<{ data: EmployeeFormValues[] }> = ({
  data,
}) => {
  const [pageSize, setPageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData =
    searchTerm.length >= 2
      ? data.filter((item) =>
          Object.values(item).some(
            (value) =>
              String(value).toLowerCase().includes(searchTerm.toLowerCase())
            // String(value).toLowerCase() === searchTerm.toLowerCase()
          )
        )
      : data

  const totalEntries = filteredData.length
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedData = filteredData.slice(startIndex, endIndex)

  return (
    <div>
      <div className='flex justify-between items-center pb-5 px-3'>
        {/* Dropdown top/left */}
        <div>
          <span className='pe-2'>Show: </span>

          <Select
            value={pageSize}
            onChange={(size) => {
              setPageSize(size)
              setCurrentPage(1)
            }}
            style={{ width: 80 }}>
            {[10, 25, 50, 100].map((size) => (
              <Option key={size} value={size}>
                {size}
              </Option>
            ))}
          </Select>
          <span className='ps-2'>entries</span>
        </div>
        <div className='flex items-center'>
          <span className='pe-2'>Search: </span>
          <SearchInput onSearch={setSearchTerm} />
        </div>
      </div>
      {/* Pagination bottom/right */}
      <Table<EmployeeFormValues>
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
        scroll={{ y: 300 }}
      />
      {/* Total entries bottom/left */}
      <div className='flex justify-between items-center pt-5 px-3'>
        <span>
          {" "}
          Showing {Math.min(pageSize, totalEntries)} of {totalEntries} entries
        </span>
        <div className='flex items-center'>
          <span>Previous</span>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={totalEntries}
            showSizeChanger={false}
            onChange={(page) => setCurrentPage(page)}
          />
          <span>Next</span>
        </div>
      </div>
    </div>
  )
}
