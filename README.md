# Currency Converter (Dollar to Toman)

A React-based currency converter application that allows users to convert between US Dollars and Iranian Toman with real-time updates and formatted number display.

## Data Flow

The application follows a simple unidirectional data flow:

1. **User Input**

   - Users can input amounts in either USD or Toman
   - Input is handled by the `CurrencyInput` component
   - Users can toggle conversion direction (USD → Toman or Toman → USD)

2. **State Management**

   ```typescript
   const [dollars, setDollars] = useState<number>(0);
   const [rials, setRials] = useState<number>(0);
   const [conversionDirection, setConversionDirection] =
     useState<ConversionDirection>("ToRials");
   ```

3. **Conversion Process**

Conversion is triggered by the "Convert" button
Uses a constant exchange rate defined in util/constants.ts
Conversion logic:

```typescript
if (conversionDirection === "ToRials") {
  setRials(dollars * EXCHANGE_RATE);
} else {
  setDollars(rials / EXCHANGE_RATE);
}
```

### Source

stack overflow
copilot[claude sonnet]
