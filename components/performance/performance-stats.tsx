import { Leetcode, Codeforces, Codechef } from "@/types";
import Link from "next/link";
import { getBadge } from "../profile/rank-label";
import { Badge } from "../ui/badge";
interface RatingProps {
    leetcode: Leetcode | undefined,
    codeforces: Codeforces | undefined,
    codechef: Codechef | undefined
}

const PerformanceStats : React.FC<RatingProps> = ({
    leetcode, codeforces, codechef
}) => {
    return (
            <>
            <div className="grid grid-cols-3 gap-1 md:gap-4 justify-center items-center w-full">
                <Link href={`https://www.leetcode.com/${leetcode?.username}` ?? "#"} className="border p-5 rounded-md flex flex-col items-center">
                    <div className="text font-medium text-center">
                        Leetcode
                    </div>
                    <div className="text-2xl font-bold">
                        {leetcode?.rating ? leetcode?.rating : "N/A"}
                    </div>
                    {leetcode?.rating &&
                        <Badge variant={"outline"}>{getBadge('Leetcode', leetcode?.rating)}</Badge>
                    }
                    <div className="text-xs font-medium text-center">
                        @{leetcode?.username}
                    </div>
                </Link>
                <Link href={`https://www.codeforces.com/profile/${codeforces?.username}` ?? "#"} className="border p-5 rounded-md flex flex-col items-center">
                    <div className="text font-medium text-center">
                        Codeforces
                    </div>
                    <div className="text-2xl font-bold">
                        {codeforces?.rating ? codeforces?.rating : "N/A"}
                    </div>
                    {codeforces?.rating &&
                        <Badge variant={"outline"}>{getBadge('Codeforces', codeforces?.rating)}</Badge>
                    }
                    <div className="text-xs font-medium text-center">
                        @{codeforces?.username}
                    </div>
                </Link>
                <Link href={`https://www.codechef.com/users/${codechef?.username}` ?? "#"} className="border p-5 rounded-md flex flex-col items-center">
                    <div className="text font-medium text-center">
                        Codechef
                    </div>
                    <div className="text-2xl font-bold">
                        {codechef?.rating ? codechef?.rating : "N/A"}
                    </div>
                    {codechef?.rating &&
                        <Badge variant={"outline"}>{getBadge('Codechef', codechef?.rating)}</Badge>
                    }
                    <div className="text-xs font-medium text-center">
                        @{codechef?.username}
                    </div>
                </Link>
            </div>
            {/* --------------------- */}
            <div className="border rounded-md w-full p-4">
            <div className="text-center font-bold">
                Total Problems Solved ({((leetcode?.number_of_questions ?? 0) + (codechef?.number_of_questions ?? 0) + (codeforces?.number_of_questions ?? 0))})
            </div>

                <div className="grid grid-cols-3 justify-center items-center">
                    <div className="p-5 rounded-md flex flex-col items-center">
                        <div className="text-2xl font-bold">
                            {leetcode?.number_of_questions ? leetcode?.number_of_questions: "N/A"}
                        </div>
                        <div className="text-xs text-gray-400">Leetcode</div>
                    </div>
                    <div className="p-5 rounded-md flex flex-col items-center">
                        <div className="text-2xl font-bold">
                            {codeforces?.number_of_questions ? codeforces?.number_of_questions : "N/A"}
                        </div>
                        <div className="text-xs text-gray-400">Codeforces</div>
                    </div>
                    <div className="p-5 rounded-md flex flex-col items-center">
                        <div className="text-2xl font-bold">
                            {codechef?.number_of_questions ? codechef?.number_of_questions : "N/A"}
                        </div>
                        <div className="text-xs text-gray-400">Codechef</div>
                    </div>
                </div>
            </div>
            </>
     );
}
 
export default PerformanceStats;