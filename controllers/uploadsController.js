const path = require('path')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const uploadProductImage = async (req, res) => {
  const productImage = req.files.image
  const maxSize = 1024 * 1024

  if (!req.files) {
    throw new CustomError.BadRequestError('No Files Uploaded')
  }

  if (!productImage.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('Please Upload an Image')
  }

  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      `Please Upload Image Smaller than 2 MB`
    )
  }

  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${productImage.name}`
  )

  await productImage.mv(imagePath)

  return res.status(StatusCodes.OK).json({
    image: { src: `/uploads/${productImage.name}` },
  })
}

module.exports = { uploadProductImage }
