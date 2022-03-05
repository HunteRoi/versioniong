import { IVersion } from './IVersion';

export class Version implements IVersion {
	major: number;
	minor: number;
	patch: number;
	preRelease: string;

	constructor() {
		this.major = 1;
		this.minor = 0;
		this.patch = 0;
		this.preRelease = null;
	}

	incrementMajor(): void {
		this.major++;
		this.minor = 0;
		this.patch = 0;
	}

	incrementMinor(): void {
		this.minor++;
		this.patch = 0;
	}

	incrementPatch(): void {
		this.patch++;
	}

	setPreRelease(preRelease: string): void {
		if (!preRelease.match(/\w+/i))
			throw new Error(
				'The pre-release suffix must be an alphanumeric value only!'
			);
		this.preRelease = preRelease;
	}
}
