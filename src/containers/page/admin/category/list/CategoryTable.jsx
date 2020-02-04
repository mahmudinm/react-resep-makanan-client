import React from 'react'
import Table from "components/ReactTable/Table"
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

export default function CategoryTable({ categories, handleModalEdit, deleteCategory }) {

  const columns = React.useMemo(
    () => [ 
      {
        Header: 'Name',
        accessor: 'name',
        disableFilters: true
      },
      {
        Header: 'Action',
        disableFilters: true,
        Cell: ({row}) => (
          <div>
             {/*<Link to={`/admin/category/${row.original.id}/edit`} className="btn btn-sm btn-primary">Edit</Link>*/}
             <Button onClick={() => handleModalEdit(row.original.id)} color="primary" size="sm" >Edit</Button>
             <button onClick={() => deleteCategory(row.original.id)} className="btn btn-sm btn-danger">Delete</button>
          </div>
        )
      }
    ],
    [deleteCategory]
  )

  return (
    <React.Fragment>
      <Table columns={columns} data={categories} />
    </React.Fragment>
  )
}