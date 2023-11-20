function fileToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result as string);
    };

    reader.onerror = function (error) {
      reject(error);
    };
  });
}

export { fileToBase64 };
