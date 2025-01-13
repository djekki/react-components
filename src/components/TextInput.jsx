// UI requirements:
// AddIcon on the left
// Install MUI icons library - npm install @mui/icons-material
// TextInput on the right
// Event should be fired when the user hit the return key
// The text should be cleared when the user hits the return key
// Test with Storybook

// using Default Imports
import React from 'react';
import Paper  from '@mui/material/Paper'; 
import InputBase  from '@mui/material/InputBase';

// import {InputBase} from '@mui/material' // Named import
//import {AddIcon }  from '@mui/icons-material'; // Named import
import  AddIcon  from '@mui/icons-material/Add'; // Default import - faster load time

export const TextInput = ({placeholder, onChange, onSubmit, value }) => {
    // paper
    // AddIcon
    // InputBase
    return (
        <Paper
         onSubmit={onSubmit}
        >
            <AddIcon />
            <InputBase 
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </Paper>
    );
}