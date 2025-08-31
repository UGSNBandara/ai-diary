# Linear Regression

Linear regression is one of the most fundamental and widely used algorithms in machine learning for predicting continuous numerical values.

## What is Linear Regression?

Linear regression models the relationship between a dependent variable and independent variables by fitting a linear equation to observed data.

### Simple Linear Regression
Models the relationship between one independent variable (x) and one dependent variable (y):

```
y = mx + b
```

Where:
- `m` is the slope
- `b` is the y-intercept

### Multiple Linear Regression
Extends to multiple independent variables:

```
y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε
```

Where:
- `β₀` is the intercept
- `β₁, β₂, ..., βₙ` are coefficients
- `ε` is the error term

## Key Assumptions

1. **Linearity**: Relationship between variables is linear
2. **Independence**: Observations are independent
3. **Homoscedasticity**: Constant variance of residuals
4. **Normality**: Residuals are normally distributed

## How It Works

1. **Cost Function**: Uses Mean Squared Error (MSE)
   ```
   MSE = (1/n) Σ(yᵢ - ŷᵢ)²
   ```

2. **Optimization**: Minimizes cost using:
   - Normal Equation (analytical solution)
   - Gradient Descent (iterative approach)

## Advantages

- Simple and interpretable
- Fast training and prediction
- No hyperparameter tuning required
- Works well with linear relationships
- Provides feature importance through coefficients

## Disadvantages

- Assumes linear relationship
- Sensitive to outliers
- Requires feature scaling for gradient descent
- Can overfit with many features

## Use Cases

- House price prediction
- Sales forecasting
- Economic modeling
- Risk assessment
- Performance prediction

## Implementation Tips

1. **Data Preprocessing**:
   - Handle missing values
   - Scale features if using gradient descent
   - Check for multicollinearity

2. **Model Evaluation**:
   - R-squared score
   - Mean Absolute Error (MAE)
   - Root Mean Squared Error (RMSE)

3. **Regularization** (if overfitting):
   - Ridge Regression (L2)
   - Lasso Regression (L1)
   - Elastic Net (L1 + L2)
