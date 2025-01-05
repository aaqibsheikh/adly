import { useEffect, useState } from "react";
import { useReadContract, useAccount } from "wagmi";
import { utils } from "ethers";
import LootyAbi from "../contracts/LootyQiibeeABI.json";

const lootyContractAddress = process.env.REACT_APP_LOOTY_QIIBEE_CONTRACT_ADDRESS as string;
console.log('lootyContractAddress', lootyContractAddress)
// export function useNftPrice() {
//   const [nftPrice, setNftPrice] = useState<string>(""); // Default empty string
//   const [pending, setPending] = useState(false);

//   const { data, error, isLoading } = useReadContract({
//     abi: LootyAbi,
//     address: lootyContractAddress as `0x${string}`,
//     functionName: "price"
//   });

//   useEffect(() => {
//     setPending(isLoading);

//     if (data !== undefined && data !== null) {
//       const priceInEth = utils.formatEther(data.toString());

//       setNftPrice(priceInEth === "0.0" ? "0" : priceInEth);
//     } else if (error) {
//       console.error(error.message);
//       setNftPrice("");
//     }

//   }, [data, error, isLoading]);

//   return { nftPrice, error, pending };
// }

// export function useGetContractStatus() {
//   const [contractStatus, setContractStatus] = useState<boolean | null>(null);
//   const [pending, setPending] = useState(false);

//   const { data, error, isLoading } = useReadContract({
//     address: lootyContractAddress as `0x${string}`,
//     abi: LootyAbi,
//     functionName: "paused"
//   });

//   useEffect(() => {
//     setPending(isLoading);
//     if (data !== undefined) {
//       setContractStatus(data as boolean);
//     }
//     if (error) {
//       console.error(error.message);
//       setContractStatus(null);
//     }
//   }, [data, error, isLoading]);

//   return { contractStatus, error, pending: isLoading };
// }

// export function useBalanceOf() {
//   const { address } = useAccount();
//   const [balanceOf, setBalanceOf] = useState<string | undefined>(undefined);
//   const [pending, setPending] = useState(false);

//   const { data, error, isLoading } = useReadContract({
//     address: lootyContractAddress as `0x${string}`,
//     abi: LootyAbi,
//     functionName: "balanceOf",
//     args: address ? [address] : []
//     // enabled: !!address, // Ensure the call is only made when an account is connected
//   });

//   useEffect(() => {
//     setPending(isLoading);
//     if (data) {
//       setBalanceOf(data.toString());
//     }
//     if (error) {
//       console.error(error.message);
//       setBalanceOf(undefined);
//     }
//   }, [data, error, isLoading]);

//   return { balanceOf, error, pending: isLoading };
// }
