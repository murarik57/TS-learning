interface DataObject {
    id: number;
    name: string;
}
interface SuccessResponse {
    status: "success";
    data: DataObject;
}
interface ErrorResponse {
    status: "error";
    errorMessage: string;
}
export type Mixed = SuccessResponse | ErrorResponse;
export {};
//# sourceMappingURL=user.types.d.ts.map