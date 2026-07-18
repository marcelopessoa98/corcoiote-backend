import type { Request, Response } from "express";
import { findAllCustumers } from "../services/customer.service.ts";

export function getAllCustomers(_request: Request, response: Response) {
    const customers = findAllCustumers();

    response.status(200).json(customers);
}
