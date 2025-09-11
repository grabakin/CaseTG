/**
 * Утилита для получения правильных путей к изображениям
 * Поддерживает как локальную разработку, так и GitHub pages
 */
export const getImagePath = (imageName: string): string => {
    const baseUrl = import.meta.env.BASE_URL || '/';

    // Убеждаемся что базовый путь заканчивается слешем
    const normalizedBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';

    // Убираем начальный слеш из имени файла если есть
    const cleanImage = imageName.startsWith('/') ? imageName.slice(1) : imageName;

    const result = normalizedBase + cleanImage;

    console.log('getImagePath debug:', {
        originalImageName: imageName,
        baseUrl,
        normalizedBase,
        cleanImage,
        finalResult: result
    });

    return result;
};

/**
 * Функция для проверки корректности BASE_URL
 */
export const debugBaseUrl = (): void => {
    console.log('BASE_URL debug info:', {
        'import.meta.env.BASE_URL': import.meta.env.BASE_URL,
        'import.meta.env.MODE': import.meta.env.MODE,
        'import.meta.env.PROD': import.meta.env.PROD
    });
};
