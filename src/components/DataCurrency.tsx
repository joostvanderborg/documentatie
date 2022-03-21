/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import React, { HTMLAttributes } from "react";

interface DataCurrencyProps extends HTMLAttributes<HTMLDataElement> {
  currency: string;
  amount: string | number;
  locale: string;
}

export const DataCurrency = ({
  children,
  currency,
  amount,
  locale,
  className,
  ...restProps
}: DataCurrencyProps) => (
  <data
    {...restProps}
    value={`${currency} ${amount}`}
    className={clsx("data", "data--currency", "data--numeric", className)}
  >
    {
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
      }).format(typeof amount == "string" ? parseFloat(amount) : amount)
      // TODO: Support currency symbol AFTER the number
    }
  </data>
);
