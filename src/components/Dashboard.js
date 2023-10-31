import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHref } from "react-router-dom";
import DeleteModal from "./DeleteData";
import { Button, Table, TableHead, TableRow, TableCell, TableBody, IconButton, TablePagination } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";


// ...

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [film, setFilm] = useState([]);
  const [open, setOpen] = useState(false);

  const [dataDelete, setDataDelete] = useState("");

  useEffect(() => {
    fetchAllFilm();
  }, []);

  const fetchAllFilm = async () => {
    try {
      const res = await axios.get(
        "https://6531ff574d4c2e3f333d78e7.mockapi.io/Films"
      );
      const sortedFilms = res.data.sort((a, b) => b.year - a.year);
      setFilm(sortedFilms);
    } catch (error) {
      console.log("Error fetching film", error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (item) => {
    setDataDelete(item.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    // Xoá thông tin người dùng đã đăng nhập
    localStorage.removeItem('Film');
    // Chuyển hướng về trang đăng nhập
    window.location.href = "/";
  };

  return (
    <>

      <Link
        to="/adddata"
        className="flex justify-end text-decoration-none"
      >
        <Button
          variant="contained"
          color="primary"
        >
          {" "}
          Thêm phim
        </Button>
      </Link>
      
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
      >
        {" "}
        Đăng xuất
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Poster</TableCell>
            <TableCell>Tên</TableCell>
            <TableCell>Giá</TableCell>
            <TableCell align="right">Năm</TableCell>
            <TableCell align="right">Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {film.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
            <TableCell align="left">
                <img
                  src={row.img}
                  alt="img"
                  style={{ width: '50px', height: '80px' }}
                />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell align="right">{row.year}</TableCell>              
              <TableCell align="right">
                <IconButton onClick={() => handleDelete(row)} color="secondary">
                  <DeleteIcon />
                </IconButton>
                <Link to={`/editdata/${row.id}`}>
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={film.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <DeleteModal
        open={open}
        handleClose={handleClose}
        dataDelete={dataDelete}
        fetchAllFilm={fetchAllFilm}
      />
    </>
  );
}
