#!/bin/bash

# simple-interest.sh
# A simple calculator to compute simple interest based on user input.
# Formula: Simple Interest = (Principal * Rate * Time) / 100

# Prompt the user for the principal amount
echo "Enter the principal amount:"
read principal

# Prompt the user for the rate of interest
echo "Enter the rate of interest (in %):"
read rate

# Prompt the user for the time period
echo "Enter the time period (in years):"
read time

# Calculate the simple interest
# 'bc' is used to handle decimal (floating-point) calculations
interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

# Display the result
echo "The simple interest is: $interest"
