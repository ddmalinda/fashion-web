import { Accordion, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import ProductFilter from '../../layouts/allItems/ProductFilter'
export default function FilterAccordion({originalProductList,productList,updateProducts}) {

  return(

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
            <Typography>View Filters</Typography>
        </AccordionSummary>
         <ProductFilter data={originalProductList} displayProductList={productList} updateProducts={updateProducts}/>
    </Accordion>
) 
}