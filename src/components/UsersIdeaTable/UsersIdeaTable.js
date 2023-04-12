import { TableCell, TableContainer, TableHead, TableRow , Table, TableBody, Paper, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const UsersIdeaTable = ({likedIdeas}) => {
    const [ideasData, setIdeasData] = useState([]);

    useEffect(() => {
        
    }, []);

    console.log(ideasData);

    return (
        <TableContainer overflow-y="scrollS" component={Paper} sx={{maxHeight: '200px'}}>
            <Table options={{maxBodyHeight:100}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Claim</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ideasData.map((idea) => (
                        <TableRow key={idea._id}>
                            <TableCell>{idea.text}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary">
                                    Claim
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UsersIdeaTable;
