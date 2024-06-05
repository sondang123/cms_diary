import { useNavigate, useParams } from "react-router-dom";
import DefaultLayout from "../../../layout/DefaultLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { CellInputImageIconMood } from "~/components/FeatureComponent/IconMoodComponent/CellInputImageIconMood";
import { Button } from "~/components/ui/button";
import { AppDropdownCheckbox } from "~/components/AppComponent/AppDropdownCheckbox";
import { AppData } from "~/const/AppData";
import { TypeFieldTheme } from "~/const/Type/TypeTheme";
import { useEffect } from "react";

const dataField: TypeFieldTheme[] = [
  {
    label: "primary",
    name: "primary",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "gradientStart",
    name: "gradient_start",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "gradientEnd",
    name: "gradient_end",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "onPrimary",
    name: "on_primary",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "background",
    name: "background",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "glass",
    name: "glass",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "glassOpacity",
    name: "glass_opacity",
    type: "text",
    placeholder: "enter value",
  },
  {
    label: "recordDialog",
    name: "record_dialog",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "recordContainer",
    name: "record_container",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "recordOnContainer",
    name: "record_on_container",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "recordHeading",
    name: "record_heading",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "recordBodyText",
    name: "record_body_text",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "Neutral 1",
    name: "neutral_1",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "Neutral 2",
    name: "neutral_2",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "Neutral 3",
    name: "neutral_3",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "Neutral 3",
    name: "neutral_3",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "Neutral 4",
    name: "neutral_4",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "Neutral 5",
    name: "neutral_5",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "Neutral 6",
    name: "neutral_6",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "Neutral 7",
    name: "neutral_7",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "Neutral 8",
    name: "neutral_8",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "headerIcon",
    name: "header_icon",
    placeholder: "Input color code",
    type: "color",
  },
  {
    label: "divider",
    name: "divider",
    placeholder: "Input color code",
    type: "color",
  },
];
const transformedObject = dataField.reduce(
  (acc, cur) => {
    if (cur.name) {
      acc[cur.name] = z.string().min(6, {
        message: "must be at least 6 characters.",
      });
    }
    return acc;
  },
  {} as { [key: string]: any }
);
const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  is_light: z.boolean(),
  is_premium: z.boolean(),
  wall_background: z.instanceof(File, { message: "required" }),
  img_preview: z.instanceof(File, { message: "required" }),
  ...transformedObject,
});

interface IProps {
  title?: string;
  isEdit?: boolean;
}
export const AddThemeScreen: React.FC<IProps> = ({
  title = "Add Theme",
  isEdit = false,
}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  // const schema = dataField.reduce(
  //   (acc, cur) => {
  //     if (cur.name) {
  //       acc[cur.name] = "";
  //     }
  //     return acc;
  //   },
  //   {} as { [key: string]: string }
  // );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      is_light: true,
      is_premium: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  useEffect(() => {
    if (isEdit && id) {
      form.setValue("name", "aaa");
      form.setValue("is_light", false);
      form.setValue("is_premium", true);
    }
  }, [form, id, isEdit]);

  return (
    <DefaultLayout>
      <div>
        <div className="rounded-xl bg-white p-5 pt-8">
          <div className="flex items-center border-b border-neutral-100 pb-3.5">
            <div
              className="p-2 border border-neutral-200 rounded-1.5 mr-4 cursor-pointer hover:opacity-80"
              onClick={() => {
                navigate("/theme");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.0005 13.1659C9.8725 13.1659 9.74448 13.1172 9.64715 13.0192L4.98048 8.35256C4.78515 8.15722 4.78515 7.84053 4.98048 7.6452L9.64715 2.97853C9.84248 2.7832 10.1592 2.7832 10.3545 2.97853C10.5498 3.17386 10.5498 3.49055 10.3545 3.68589L6.04119 7.9992L10.3545 12.3125C10.5498 12.5078 10.5498 12.8245 10.3545 13.0199C10.2565 13.1172 10.1285 13.1659 10.0005 13.1659Z"
                  fill="#4B5563"
                />
              </svg>
            </div>
            <p className="typo-s18-w600 text-neutral-900">{title}</p>
          </div>

          <div className="pt-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-800">
                          Theme Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Theme Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="is_light"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel className="text-neutral-800">
                            Type
                          </FormLabel>
                          <FormControl>
                            <div className="w-full">
                              <AppDropdownCheckbox
                                value={
                                  field?.value
                                    ? AppData.dataTypeTheme?.[1]?.value
                                    : AppData.dataTypeTheme?.[0]?.value
                                }
                                option={AppData.dataTypeTheme}
                                onChange={(e) => {
                                  field?.onChange(
                                    e?.value ===
                                      AppData.dataTypeTheme?.[1]?.value
                                  );
                                }}
                              />
                            </div>
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="is_premium"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel className="text-neutral-800">
                            Is Premium
                          </FormLabel>
                          <FormControl>
                            <div className="w-full">
                              <AppDropdownCheckbox
                                value={field?.value?.toString()}
                                option={AppData.dataDropdownTrueFalse}
                                onChange={(e) => {
                                  field?.onChange(
                                    e?.value ===
                                      AppData.dataDropdownTrueFalse?.[0]?.value
                                  );
                                }}
                              />
                            </div>
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <div className="border-b border-neutral-100 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    <FormField
                      control={form.control}
                      name={"wall_background"}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-800">
                            Theme Background
                          </FormLabel>
                          <FormControl>
                            <div className="w-[96px]">
                              <CellInputImageIconMood
                                value={field.value}
                                handleChange={(e) => {
                                  field.onChange(e);
                                }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={"img_preview"}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-800">
                            Preview
                          </FormLabel>
                          <FormControl>
                            <div className="w-[96px]">
                              <CellInputImageIconMood
                                value={field.value}
                                handleChange={(e) => {
                                  field.onChange(e);
                                }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-6">
                    {dataField?.map((item, index) => (
                      <div key={index}>
                        <FormField
                          control={form.control}
                          name={item?.name}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-neutral-800">
                                {item?.label}
                              </FormLabel>
                              <FormControl>
                                <div className="flex gap-2">
                                  <Input
                                    placeholder={item?.placeholder}
                                    {...field}
                                  />
                                  {item?.type === "color" ? (
                                    <Input
                                      type="color"
                                      className="w-[50px] p-0 bg-white border-0 cursor-pointer"
                                      {...field}
                                    />
                                  ) : null}
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    className="w-30 rounded-1.5 py-2"
                    type="button"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="w-30 rounded-1.5 bg-primary-main hover:bg-primary-main hover:opacity-80 py-2"
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
