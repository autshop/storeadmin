import { FC, memo } from "react";
import { get } from "lodash";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { TextField } from "@material-ui/core";
//
import css from "./style.module.scss";

type Props = {
    index: number;
};

const SizesListItem: FC<Props> = ({ index }) => {
    const { control, register } = useFormContext();
    const { fields } = useFieldArray({ control, name: "items" });

    return (
        <div className={css["SizeListItem"]}>
            <input
                type="hidden"
                name={`items[${index}].id`}
                defaultValue={get(fields, `[${index}].id`)}
                ref={register()}
            />
            <input
                type="hidden"
                name={`items[${index}].position`}
                defaultValue={get(fields, `[${index}].position`)}
                ref={register()}
            />
            <div className={css["SizeListItem__field"]}>
                <Controller
                    name={`items[${index}].measurement`}
                    control={control}
                    defaultValue={get(fields, `[${index}].measurement`, "")}
                    render={({ onChange, value }) => (
                        <TextField onChange={e => onChange(e.target.value)} value={value} label={"Measurement"} />
                    )}
                />
            </div>
            <div className={css["SizeListItem__field"]}>
                <Controller
                    name={`items[${index}].quantity`}
                    control={control}
                    defaultValue={get(fields, `[${index}].quantity`, "")}
                    render={({ onChange, value }) => (
                        <TextField
                            onChange={e => onChange(e.target.value)}
                            value={value}
                            label={"Quantity"}
                            type={"number"}
                        />
                    )}
                />
            </div>
        </div>
    );
};
export default memo(SizesListItem);
