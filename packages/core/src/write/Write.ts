import type {
	AbiParametersToPrimitiveTypes,
	ExtractAbiFunction,
	ExtractAbiFunctionNames,
	FormatAbi,
	ParseAbi,
} from 'abitype'
export type ValueOf<T> = T[keyof T]

export type Write<
	TName extends string,
	THumanReadableAbi extends readonly string[],
> = {
	[TFunctionName in
		ExtractAbiFunctionNames<
			ParseAbi<THumanReadableAbi>,
			'payable' | 'nonpayable'
		>]: <
		TArgs extends AbiParametersToPrimitiveTypes<
			ExtractAbiFunction<ParseAbi<THumanReadableAbi>, TFunctionName>['inputs']
		> &
			any[] = AbiParametersToPrimitiveTypes<
			ExtractAbiFunction<ParseAbi<THumanReadableAbi>, TFunctionName>['inputs']
		> &
			any[],
	>(
		...args: TArgs
	) => TArgs['length'] extends 0
		? {
				functionName: TFunctionName
				humanReadableAbi: FormatAbi<
					[ExtractAbiFunction<ParseAbi<THumanReadableAbi>, TFunctionName>]
				>
				abi: [ExtractAbiFunction<ParseAbi<THumanReadableAbi>, TFunctionName>]
		  }
		: {
				evmtsContractName: TName
				functionName: TFunctionName
				args: TArgs
				humanReadableAbi: FormatAbi<
					[ExtractAbiFunction<ParseAbi<THumanReadableAbi>, TFunctionName>]
				>
				abi: [ExtractAbiFunction<ParseAbi<THumanReadableAbi>, TFunctionName>]
		  }
}
