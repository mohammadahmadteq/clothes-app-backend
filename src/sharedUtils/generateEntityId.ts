import { randomUUID } from "crypto"

export default function generateEntityId() {
    return randomUUID().slice(10);
}