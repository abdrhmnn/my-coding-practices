// dalam js sudah dibuatkan berbagai class untuk menagani jenis error
// semua class itu extends ke class Error

class MathUtil {
	static tambah(value) {
		// trigger an error
		if (value === undefined) {
			throw new Error("value kosong!");
		}

		return value;
	}

	// error handling
	static kurang(value) {
		// gunakan try catch -> mau coba kode yg kemungkinan error
		try {
			this.tambah();
		} catch (err) {
			console.error(`pesan: ${err.message}`);
		} finally {
			// akan selalu dieksekusi saat try catch selesai walaupun terjadi error atau tidak
			console.log("block finally berjalan");
		}
	}
}

// membuat manual class Error dgn extends ke class Error
class ValidationError extends Error {
	constructor(message, field) {
		// hrs implement message yg ada pada class Error
		super(message);
		this.field = field;
	}
}

MathUtil.kurang();
