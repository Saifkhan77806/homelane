import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";


export function Book3dDesign() {
    return (
        <Card className="w-full max-w-sm bg-white text-black absolute right-2.5 max-md:hidden gap-3">
            <CardHeader>
                <CardTitle className="text-3xl tracking-wide font-semibold">Meet a Designer</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-2">
                        <div className="grid gap-2">
                            <Input
                                id="email"
                                type="email"
                                className="rounded-none outline-none border-t-transparent border-r-transparent border-l-transparent   border-b border-b-gray-400 bg-white focus-visible:ring-0"
                                placeholder="Enter Your Name"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Input id="text" className="rounded-none outline-none border-t-transparent border-r-transparent border-l-transparent   border-b border-b-gray-400 bg-white focus-visible:ring-0" placeholder="Enter Your Email" type="text" required />
                        </div>
                        <div className="grid gap-2">
                            <Input id="text" className="rounded-none outline-none border-t-transparent border-r-transparent border-l-transparent   border-b border-b-gray-400 bg-white focus-visible:ring-0" placeholder="Enter Your Phone Number" type="number" required />
                        </div>
                        <div className="grid gap-2">
                            <Input id="text" className="rounded-none outline-none border-t-transparent border-r-transparent border-l-transparent   border-b border-b-gray-400 bg-white focus-visible:ring-0" placeholder="Enter Your current residence pincode" type="number" required />
                        </div>

                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full bg-red-600 text-white cursor-pointer">
                    Book 3d desgin
                </Button>
                <p className="text-xs">By submitting, you agree to our
                    <span className="text-red-600">
                        privacy policy
                    </span>  and
                    <span className="text-red-600">
                        terms of use,
                    </span>
                    allowing us to use your information as outlined.</p>
            </CardFooter>
        </Card>
    )
}
