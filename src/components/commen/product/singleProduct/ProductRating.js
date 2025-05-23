import { Rating } from '@mui/material'
import React from 'react'

export default function ProductRating({rating}) {
  return (
    <Rating name="half-rating-read" value={rating} precision={0.1} readOnly />
  )
}