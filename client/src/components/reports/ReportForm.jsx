import React, { useState, useContext } from 'react';

import ReportsContext from '../../context/reports/ReportsContext';
import AccountContext from '../../context/account/AccountContext';

import ImageUpload from './ImageUpload';

import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
} from '@mui/material';

const ReportForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');

  const { submitReport } = useContext(ReportsContext);
  const { user } = useContext(AccountContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    submitReport(user.id, title, category, description, address);

    setTitle('');
    setCategory('');
    setDescription('');
    setAddress('');
  };

  const handleReset = () => {
    setTitle('');
    setCategory('');
    setDescription('');
    setAddress('');
  };

  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      component="form"
      sx={{ p: 3 }}
      onSubmit={handleSubmit}
    >
      <Grid item>
        <Typography variant="h2" sx={{ p: 0, mb: 2 }}>
          Submit a Report
        </Typography>
        <TextField
          required
          fullWidth
          size="small"
          margin="dense"
          sx={{ my: 1 }}
          label="Title"
          id="report-title"
          name="report-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormControl
          required
          size="small"
          sx={{ my: 1, width: '100%' }}
        >
          <InputLabel id="demo-select-small">
            Category
          </InputLabel>
          <Select
            labelId="category"
            id="category"
            value={category}
            label="Category"
            MenuProps={{ sx: { maxHeight: '200px' } }}
            onChange={(event) => setCategory(event.target.value)}
          >
            <MenuItem value={''}>
              <em>None</em>
            </MenuItem>
            {[
              { id: 1, label: 'Drainage/Flooding' },
              { id: 2, label: 'Graffiti/Vandalism' },
              { id: 3, label: 'Litter Pickup' },
              { id: 4, label: 'Parks - General' },
              { id: 5, label: 'Potholes' },
              { id: 6, label: 'Sidewalks' },
              { id: 7, label: 'Signs' },
              { id: 8, label: 'Snow/Ice' },
              { id: 9, label: 'Streetlights' },
              { id: 10, label: 'Streets - General' },
              { id: 11, label: 'Trails/Walkways' },
              { id: 12, label: 'Trees' },
              { id: 13, label: 'Utilities/Infrastructure' },
              { id: 14, label: 'Other' },
            ].map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          required
          multiline
          rows={4}
          size="small"
          margin="dense"
          sx={{ my: 1 }}
          label="Description"
          id="report-description"
          name="report-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          fullWidth
          required
          size="small"
          margin="dense"
          sx={{ my: 1 }}
          label="Address"
          id="report-address"
          name="report-address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <ImageUpload />
      </Grid>
      <Grid
        item
        flexGrow={1}
        container
        flexDirection="column"
        justifyContent="flex-end"
      >
        <Grid
          item
          container
          justifyContent="space-between"
          columnSpacing={4}
        >
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{ width: 1 }}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="error"
              type="reset"
              sx={{ width: 1 }}
              onClick={handleReset}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReportForm;
