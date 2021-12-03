import { Column, DataType, PrimaryKey, Table, Model } from "sequelize-typescript";

export enum OrderStatus {
    Approved = 'approved',
    Pending = 'pedding'
}

@Table({
    tableName: 'orders',
    createdAt: 'created_at',
    updatedAt: 'update_at',
})

export class Order extends Model {
    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    id: string;

    @Column({ type: DataType.DECIMAL({precision: 10, scale: 2}), allowNull: false })
    amount: number;

    @Column({ allowNull: false, defaultValue: OrderStatus.Pending })
    status: OrderStatus;
}
