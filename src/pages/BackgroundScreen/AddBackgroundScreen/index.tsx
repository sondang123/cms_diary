import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AppData } from "~/const/AppData";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import DefaultLayout from "~/layout/DefaultLayout";
import { AppDropdownCheckbox } from "~/components/AppComponent/AppDropdownCheckbox";
import { CellInputImageIconMood } from "~/components/FeatureComponent/IconMoodComponent/CellInputImageIconMood";

interface IProps {
  title?: string;
}
const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  is_premium: z.boolean(),
  background_img: z.instanceof(File, { message: "required" }),
  icons: z.array(z.string()),
});
export const AddBackgroundScreen: React.FC<IProps> = ({
  title = "Add Icon Mood",
}) => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      is_premium: true,
      icons: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <DefaultLayout>
      <div>
        <div className="rounded-xl bg-white p-5 pt-8">
          <div className="flex items-center border-b border-neutral-100 pb-3.5">
            <div
              className="p-2 border border-neutral-200 rounded-1.5 mr-4 cursor-pointer hover:opacity-80"
              onClick={() => {
                navigate("/background");
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
                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-800">
                          Background Category Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Category name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
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
                <FormField
                  control={form.control}
                  name={"background_img"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-800">
                        Background Image
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

                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-800">
                          toolbarColor
                        </FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-2">
                            <Input placeholder="Input color code" {...field} />
                            <Input
                              type="color"
                              className="w-[50px] p-0 bg-white border-0 cursor-pointer"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-800">
                          iconColor
                        </FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-2">
                            <Input placeholder="Input color code" {...field} />
                            <Input
                              type="color"
                              className="w-[50px] p-0 bg-white border-0 cursor-pointer"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-800">
                          textColor
                        </FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-2">
                            <Input placeholder="Input color code" {...field} />
                            <Input
                              type="color"
                              className="w-[50px] p-0 bg-white border-0 cursor-pointer"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-800">
                          iconToolbarColor
                        </FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-2">
                            <Input placeholder="Input color code" {...field} />
                            <Input
                              type="color"
                              className="w-[50px] p-0 bg-white border-0 cursor-pointer"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
